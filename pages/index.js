import { Component } from "react";

export function getServerSideProps({ res}) {
  res.setHeader("cache-control", "public, max-age=9999999, s-maxage=99999999, stale-while-revalidate")

  return {
    props: {}
  }
}

export default class Home extends Component {

  render() {
    return (
      <>
        <p>Res.setHeader demo.</p>
      </>
    )
  }
}