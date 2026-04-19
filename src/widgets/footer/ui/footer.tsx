export function Footer() {
  return (
    <footer className="mt-12 border-t border-(--border) py-6 text-center text-xs text-(--text-muted)">
      &copy; {new Date().getFullYear()} Christian Murillo. All rights reserved.
    </footer>
  );
}
