class MixTapeSong extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(<div>
            <h5>{this.props.song_name} {this.props.artist_name}</h5>
          </div>);
  }
}
