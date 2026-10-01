# VVH Salon Bar storefront

## Goal
Recreate the supplied luxury hair storefront at the home page, replacing the reference hero image with the uploaded campaign video.

## Build
- Create a fixed announcement bar and responsive boutique navigation with mobile menu, search, account, wishlist, currency, and bag controls.
- Build a full-viewport editorial hero using the uploaded video on autoplay, muted loop, with readable campaign copy and primary actions layered over it.
- Recreate the seven supplied content areas: category editorial grid, signature product edit, Burmese hair feature, tailored solutions, testimonials, social lookbook, and full footer.
- Use the supplied image URLs for products, editorial photography, and lookbook imagery.
- Add functional lightweight interactions for the mobile menu, search panel, product filters, wishlist toggles, quick-add bag count, and newsletter confirmation.
- Match the reference’s restrained black, warm ivory, and muted-gold palette with Playfair Display, Montserrat, and Inter typography.

## Technical details
- Keep the page in the existing TanStack Start home route and use local React state for storefront interactions.
- Store the uploaded MP4 through the project asset flow and render it as an accessible background video with a poster fallback.
- Define semantic design tokens and shared motion styles in the global stylesheet; avoid one-off color styling in page markup.
- Add route-specific social metadata and preserve the project’s existing error handling and router shell.
- Verify the finished page in the running preview at desktop and mobile widths, including overflow, controls, video loading, and console errors.
