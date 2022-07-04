import { onMounted, reactive, ref } from "vue";

export const useTheme = () => {

  const themeOptions = reactive({
    user: 'light-theme',
    title: '',
    text: '🌞',
  });

  const getMediaPreference = () => {
    const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return hasDarkPreference ? 'dark-theme' : 'light-theme';
  };

  const getTheme = () => {
    return localStorage.getItem("user-theme");
  };

  const setTheme = (option: string) => {

    const message = (actualTheme: string, newTheme: string) => `você está no modo ${actualTheme} do app, clique para mudar para o modo ${newTheme}`;

    localStorage.setItem("user-theme", option);
    themeOptions.user = option;
    themeOptions.text = themeOptions.user === "dark-theme" ? "🌙" : "🌞";
    themeOptions.title = themeOptions.user === "dark-theme" ? message('escuro', 'claro') : message('claro', 'escuro');
    document.documentElement.className = option;
  };

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === "light-theme") setTheme("dark-theme");
    else setTheme("light-theme");
  };

  onMounted(() => {
    const mediaPreference = getMediaPreference();
    const theme = getTheme();
    if (theme) setTheme(theme);
    else setTheme(mediaPreference);
    console.log('onMounted', mediaPreference, theme);
  });

  return {
    themeOptions,
    toggleTheme,
  }
}