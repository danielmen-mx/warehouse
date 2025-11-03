let globalNavigate: (path: string, options?: any) => void;

export const setNavigator = (navFunc: typeof globalNavigate) => {
  globalNavigate = navFunc;
}

export const navigate = (path: string, options?: any) => {
  if (!globalNavigate) {
    console.error("Navigator not initialized");
    return;
  }
  globalNavigate(path, options);
}