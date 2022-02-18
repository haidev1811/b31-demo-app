export default function ({ store, redirect }) {
  const userId = localStorage.getItem('userId')
    ? localStorage.getItem('userId')
    : null;
  if (userId) {
    return redirect('/');
  }
}
