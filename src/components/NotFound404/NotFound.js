const srcError = `https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
`;

export default function NotFound() {
  return (
    <div role="alert">
      <img src={srcError} alt="Error" />
      <h1 style={{ textAlign: 'center' }}>Page not found 404</h1>
    </div>
  );
}
