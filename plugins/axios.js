// plugin でプラグインを使うときは第一引数に `context` が入ってくるので、`context.app.$axios` のように参照します
export default ({ app: { $axios } }) => {
  const token = window.localStorage.getItem('hanly_access_token') // アクセストークンの保存先
  if (token) {
    $axios.setToken(token, 'Bearer')
  }
}
