// context に redirect というリダイレクトしてくれる関数が入ってるので、それを使ってトークンがなかった場合ログインページへリダイレクトします
export default function ({ redirect, route }) {
  if (
    route.path === '/' ||
    route.path === '/signin' ||
    route.path === '/signup'
  ) {
    return
  }
  const token = window.localStorage.getItem('hanly_access_token')
  if (!token) {
    // トークンがない＝ユーザーが認証されていない
    return redirect('/signin')
  }
}
