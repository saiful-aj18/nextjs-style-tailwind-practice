export const metadata = {
  title: "About | My Next App",
  description: "This is the about page of our application",
};

const AboutLayout = ({ children }) => {
  return (
    <section className="space-y-6">
      <nav className="pt-6 border-t border-slate-200">
        <ul className="flex flex-wrap gap-3">
          {["Item-1", "Item-2", "Item-3", "Item-4"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer rounded-lg px-4 py-1.5 text-sm font-medium bg-slate-100 text-slate-700 hover:bg-black hover:text-white transition-all shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* About Page Content */}
      <main>{children}</main>
    </section>
  );
};

export default AboutLayout;