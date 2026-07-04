import Link from "next/link";

type BtnProps = {
  link?: string;
  label: string;
}

export function PrimaryButton({ link = "#", label}: BtnProps){
  return(
    <Link 
    href={link}
    className="w-full md:w-max whitespace-nowrap py-4 px-8 text-center text-dark rounded-ee-2xl rounded-ss-2xl bg-primary"
    >
      {label}
    </Link>
  )
}

export function SecondaryButton({ link = "#", label}: BtnProps){
  return(
    <Link
    href={link}
    className="w-full md:w-max whitespace-nowrap py-4 px-8 text-center rounded-ee-2xl rounded-ss-2xl border border-primary">
    { label }</Link>
  )
}