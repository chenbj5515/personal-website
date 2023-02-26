import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import store from "store";
import { Provider } from "react-redux";
import Code from "components/code-block";
import "../styles/globals.css";

const components = {
  code: (props: any) => <Code {...props} />,
  a: (props: any) => <a className="link" {...props} /> 
}


const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <ApolloProvider client={client}>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </ApolloProvider>
      </Layout>
    </Provider>
  );
}
