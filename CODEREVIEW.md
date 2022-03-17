# Continents.tsx

[ ] - line 5: Please take a look at ContinentsComponent type, it may cause errors. I think you can use <code>type ContinentsComponent = () => React.ReactElement</code>.

[ ] - line 31: I don't know if it's in requirement or a good idea, but should we display something in case of 'continents' being empty?

[ ] - line 31: Please take a look at continents.map, I think we need to add some keys to it.

---

# Continents.test.tsx

Note: I have never used tests in JS. Yes, i know, it's a shame. I will try to review this code based on research on StackOverflow & friends. :)

[ ] - line 8: If I run tests while i render only `Continents` component, does not have context on Apollo Client. So in order to make test works, i found the solution to pass <App/> in render. If I want to decouple Continents from App.tsx, I think I can use something like this:

<code>
 const client = new ApolloClient({
   uri: "https://countries.trevorblades.com",
   cache: new InMemoryCache(),
 });
 render(
  <ApolloProvider client={client}>
    <Continents />
  </ApolloProvider>
  )
</code>

[ ] - line 12:

   <!-- Expected: "Africa"
   Received: [<div>Africa</div>] -->

In this case it seems that findAllByText returns an array with a div inside.
I think one solution for this ( but i'm not sure it's a good practice in tests ) would be something like this:
<code> expect(item[0].textContent).toBe("Africa");
</code>

