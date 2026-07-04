// Single source of truth for social + contact links.
// TODO(remark): confirm/replace these profile URLs with the real accounts —
// these are best-guess handles, not verified. This is the ONLY file to edit.
export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/remarkstudio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/remarkstudio" },
  { label: "X", href: "https://x.com/remarkstudio" },
  { label: "Facebook", href: "https://facebook.com/remarkstudio" },
  { label: "YouTube", href: "https://youtube.com/@remarkstudio" },
] as const;

export const EMAIL = "hello@remarkstudio.co";
export const PHONE_PRIMARY = { display: "+92 326 8450001", href: "tel:+923268450001" };
export const PHONE_SECONDARY = { display: "+92 326 8450002", href: "tel:+923268450002" };
