import ToggleTheme from "@/components/ToggleTheme.jsx";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className="py-10 space-y-6">
      {/* Dynamic Title using CSS Modules */}
      <h1 className={`${styles.title} text-3xl font-bold tracking-tight`}>
        About Page
      </h1>

      <p className="text-slate-600 dark:text-white max-w-xl leading-relaxed">
        Here you can find information about our application, its features, and the team behind it. We are committed to providing the best user experience and continuously improving our platform.
      </p>

      {/* Theme Toggle Component */}
      <div className="pt-2">
        <ToggleTheme>Toggle Theme</ToggleTheme>
      </div>
    </div>
  );
};

export default About;