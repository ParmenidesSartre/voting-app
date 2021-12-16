import Head from 'next/head'

const HeadSection = () => {
  return (
    <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
    <title>Voting System</title>
    <link rel="icon" type="image/x-icon" href="/img/favicon.ico"/>
    <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&amp;display=swap" rel="stylesheet" />
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="/css/plugins.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/css/forms/theme-checkbox-radio.css" />
    <link rel="stylesheet" type="text/css" href="/css/forms/switches.css" />
    <link href="/css/authentication/form-1.css" rel="stylesheet" type="text/css" />

    <script src="/js/libs/jquery-3.1.1.min.js"></script>
    <script src="/bootstrap/js/popper.min.js"></script>
    <script src="/bootstrap/js/bootstrap.min.js"></script>
    <script src="/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <script src="/js/app.js"></script>
    <script src="/js/custom.js"></script>
    <script src="/js/form.js"></script>
    <script src="/js/authentication/form-1.js"></script>
    </Head>
  )
}

export default HeadSection
