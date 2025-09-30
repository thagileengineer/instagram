declare module "*.css" {
  // Use a string literal as the module's export type
  const content: string; 
  export default content;
}

// You can extend this for other files if needed, like SASS or images
// declare module "*.scss";
// declare module "*.png";
// ```eof

// ### Explanation

// * **`declare module "*.css"`**: This pattern tells the TypeScript compiler that any import ending in `.css` should be treated as a valid module.
// * **`export default content;`**: By default, Vite handles these side-effect imports correctly, but TypeScript needs a type. Exporting a simple `string` as the default content is a common pattern that satisfies the type checker, resolving the **`ts(2882)`** error.

// After adding this file, restart your development server (`npm run dev --prefix packages/frontend`) to ensure the changes are picked up. The error should be gone.