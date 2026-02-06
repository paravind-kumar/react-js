
function withAuth(WrapedComponent) {
  return function Protected(props){
    const isLogggedIn = false;
    
    if(!isLogggedIn) return <h3>Please login to continue...</h3>
    
    return <WrapedComponent {...props} />
  }
}

export default withAuth