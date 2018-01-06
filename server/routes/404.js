export default function (req, res) {
  let renderData = {
    title: 'Cybereits - Page not found',
  }

  res.set('content-type', 'text/html')
  res.render('notFound', renderData)
}
