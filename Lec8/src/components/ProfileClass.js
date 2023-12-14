import React from "react";
// import Author from "./assests/Author.jpg";
class Profile extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      // count:100,
      // count2:300,

      userInfo:{
        name: "",
        bio: "",
        image: "",
      }
    };

    console.log("child 1 - constructor " );
  }

  async componentDidMount(){
    console.log("child 1 - component did mount ");

    const json = await fetch(`https://api.github.com/users/amit05sept`);
    const data = await json.json();

    console.log(data);

    this.setState({
      userInfo:{
        name : data.name,
        bio: data.bio,
        image : data.avatar_url
      }
    })

  }

  componentDidUpdate(){
    console.log("child 1 componentDidUpdate");
  }

  render() {
    console.log("child  1 - render ");
    return (
      <div>
        <h1>Profile CLass component</h1>
        <img src={this.state.userInfo.image} className="AuthorImg" alt="Author Image" />
        <h1 className="AuthorTitle">{`Hi it is me ${this.state?.userInfo?.name} 😁`}</h1>
        <h2 className="Authorbio">{`${this.state.userInfo.bio}`}</h2>
        {/* <h1> count: {this.state.count + this.state.count2}</h1> */}

        {/* <button onClick={()=>{
          this.setState({
            count:this.state.count-1,
          })
        }}>click me</button> */}
      </div>
    );
  }
}

export default Profile;