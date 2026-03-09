import Link from "next/link";

interface CtaButtonProps {
  text: string;
  className: string;
  type: string;
  href?: string;
}

const CtaButton = ({ text, className, type, href }: CtaButtonProps) => {
  return (
    <>
      {type === "button" ? (
        <button
          className={`bg-button-bg text-white cursor-pointer rounded-full p-3 ${className}`}
        >
          {text}
        </button>
      ) : (
        <Link
          href={href || "#"}
          className={`bg-(--button-bg) flex justify-center items-center text-white cursor-pointer rounded-full p-3 ${className}`}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default CtaButton;
