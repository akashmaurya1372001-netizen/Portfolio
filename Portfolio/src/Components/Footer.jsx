import { FaGithub, FaLinkedin ,} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className="text-center py-6 font-semibold font-serif">
      © {new Date().getFullYear()} Akash maurya
      <div className=" text-2xl flex gap-2 justify-center-safe py-3">
        <a href="https://github.com/akashmaurya1372001-netizen" className="text-center">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/akash-maurya-499416374/">
          <FaLinkedin />
        </a>
        <a href=""><BsTwitterX /></a>
      </div>
    </footer>
  );
}
