<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Site content (categories, photos, quotes, WhatsApp/Instagram links) lives in `src/lib/site.ts`; pages read from it so details change in one place.
- Shared header/footer render in `src/routes/__root.tsx` around `<Outlet />`; each section (portfolio, sobre, contato) is its own route for SEO.
- Portfolio category filter uses the `categoria` search param so category links are shareable.
