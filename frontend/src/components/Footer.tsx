import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-accent/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <Link to="/" className="flex flex-col space-y-0.5 group">
            <div className="flex items-center space-x-2">
              <span className="font-berkshire text-xl font-bold">
                <span className="text-white">Vaarahi</span> <span className="text-accent">Matrimony (மறுமணம்)</span>
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gold/80 font-medium pl-1">
              Second Marriage (மறுமணம்) Specialist
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-white text-sm">
            © {currentYear} Vaarahi Matrimony. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;