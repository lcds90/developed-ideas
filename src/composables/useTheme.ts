import { onMounted, ref } from "vue";

export const useTheme = () => {

    const userTheme = ref('light-theme');

    const getMediaPreference = () => {
        const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return hasDarkPreference ? 'dark-theme' : 'light-theme';
    };
  
      const getTheme = () => {
        return localStorage.getItem("user-theme");
      };
  
      const setTheme = (theme: string) => {
        localStorage.setItem("user-theme", theme);
        userTheme.value = theme;
        document.documentElement.className = theme;
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
        userTheme,
        toggleTheme,
      }
}