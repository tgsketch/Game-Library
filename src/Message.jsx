function Message() {
  const name = "Alex";
  if (name) return <h1>Hello {name}</h1>;
  else return <h1>Hello Dolly</h1>;
}

export default Message;
