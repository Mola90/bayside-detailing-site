export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={"inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-md bg-white hover:bg-gray-50 " + className}
      {...props}
    >
      {children}
    </button>
  );
}
