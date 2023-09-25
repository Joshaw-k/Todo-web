import { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

export const todosContext = createContext();

const getLocalStorage = () => {
  let todos = localStorage.getItem("todoWeb");
  if (todos) {
    todos = JSON.parse(localStorage.getItem("todoWeb"));
  } else {
    todos = [];
  }
  return todos;
};

const setLocalStorage = (todos) => {
  localStorage.setItem("todoWeb", JSON.stringify(todos));
};

function App() {
  const HSThemeAppearance = {
    init() {
      const defaultTheme = "default";
      let theme = localStorage.getItem("hs_theme") || defaultTheme;

      if (document.querySelector("html").classList.contains("dark")) return;
      this.setAppearance(theme);
    },
    _resetStylesOnLoad() {
      const $resetStyles = document.createElement("style");
      $resetStyles.innerText = `*{transition: unset !important;}`;
      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
      document.head.appendChild($resetStyles);
      return $resetStyles;
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
      const $resetStylesEl = this._resetStylesOnLoad();

      if (saveInStore) {
        localStorage.setItem("hs_theme", theme);
      }

      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }

      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.remove("default");
      document.querySelector("html").classList.remove("auto");

      document
        .querySelector("html")
        .classList.add(this.getOriginalAppearance());

      setTimeout(() => {
        $resetStylesEl.remove();
      });

      if (dispatchEvent) {
        window.dispatchEvent(
          new CustomEvent("on-hs-appearance-change", { detail: theme })
        );
      }
    },
    getAppearance() {
      let theme = this.getOriginalAppearance();
      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }
      return theme;
    },
    getOriginalAppearance() {
      const defaultTheme = "default";
      return localStorage.getItem("hs_theme") || defaultTheme;
    },
  };
  HSThemeAppearance.init();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (HSThemeAppearance.getOriginalAppearance() === "auto") {
        HSThemeAppearance.setAppearance("auto", false);
      }
    });

  window.addEventListener("load", () => {
    const $clickableThemes = document.querySelectorAll(
      "[data-hs-theme-click-value]"
    );
    const $switchableThemes = document.querySelectorAll(
      "[data-hs-theme-switch]"
    );

    $clickableThemes.forEach(($item) => {
      $item.addEventListener("click", () =>
        HSThemeAppearance.setAppearance(
          $item.getAttribute("data-hs-theme-click-value"),
          true,
          $item
        )
      );
    });

    $switchableThemes.forEach(($item) => {
      $item.addEventListener("change", (e) => {
        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");
      });

      $item.checked = HSThemeAppearance.getAppearance() === "dark";
    });

    window.addEventListener("on-hs-appearance-change", (e) => {
      $switchableThemes.forEach(($item) => {
        $item.checked = e.detail === "dark";
      });
    });
  });

  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const todoRef = useRef(null);
  const [tabId, setTabId] = useState(1);

  useEffect(() => {
    setTodos(getLocalStorage());
  }, []);

  const handleCheck = (todoId, tabId) => {
    let allTodos = getLocalStorage();
    const newTodos = allTodos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    if (tabId === 2) {
      const filteredTodo = newTodos.filter((todo) => todo.completed == true);
      setTodos(filteredTodo);
    } else if (tabId === 3) {
      const filteredTodo = newTodos.filter((todo) => todo.completed != true);
      setTodos(filteredTodo);
    } else {
      setTodos(newTodos);
    }
    setLocalStorage(newTodos);
  };

  const handleDelete = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
    setLocalStorage(newArray);
  };

  const handleEdit = (e, tabId) => {
    const newTodos = todos.map((todo) =>
      todo.id === editId ? { ...todo, title: e.target.value } : todo
    );
    if (tabId === 2) {
      const filteredTodo = newTodos.filter((todo) => todo.completed == true);
      setTodos(filteredTodo);
    } else if (tabId === 3) {
      const filteredTodo = newTodos.filter((todo) => todo.completed != true);
      setTodos(filteredTodo);
    } else {
      setTodos(newTodos);
    }
    setLocalStorage(newTodos);
  };

  const handleTab = (id) => {
    let allTodo = getLocalStorage();
    if (id === 2) {
      const filteredTodo = allTodo.filter((todo) => todo.completed == true);
      setTodos(filteredTodo);
    } else if (id === 3) {
      const filteredTodo = allTodo.filter((todo) => todo.completed != true);
      setTodos(filteredTodo);
    } else {
      setTodos(allTodo);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { title: todoRef.current.value, completed: false, id: todos.length + 1 },
    ]);
    setLocalStorage([
      ...todos,
      { title: todoRef.current.value, completed: false, id: todos.length + 1 },
    ]);
  };
  return (
    <todosContext.Provider
      value={{
        todos,
        editId,
        todoRef,
        tabId,
        setTabId,
        handleCheck,
        handleDelete,
        handleEdit,
        setEditId,
        handleCreate,
        handleTab,
      }}
    >
      <div className="bg-black dark:bg-white ">
        <Header />
        <Hero />
      </div>
    </todosContext.Provider>
  );
}

export default App;
