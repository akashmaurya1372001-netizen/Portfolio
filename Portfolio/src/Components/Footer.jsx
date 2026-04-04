import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-center py-6 font-semibold font-serif">
      © {new Date().getFullYear()} Akash maurya
      <div className=" text-2xl flex gap-6 justify-center-safe py-3">
        <a className="hover:text-white" href="https://github.com/akashmaurya1372001-netizen">
          <FaGithub />
        </a>

        <a className="hover:text-white"  href="https://www.linkedin.com/in/akash-maurya-499416374/">
          <FaLinkedin />
        </a>


        <a className="hover:text-white" href="https://bsky.app/profile/akash69.bsky.social"><FaBluesky />
</a>

      </div>
    </footer>
  );
}
