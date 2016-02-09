var Event = React.createClass({
  render: function() {
    const {event} = this.props;
    return (
      <li className="event">
        <span className="time-place">
          {moment(event.time).format('MMMM D · h:mm A')} | &nbsp;
          {event.venue.name}
        </span>
        <header className="title">{event.name}</header>
        <div className="description" dangerouslySetInnerHTML={{__html: event.description}} />
      </li>
    )
  }
});

var EventList = React.createClass({
  render: function() {
    return (
      <ul> {this._renderListItems()} </ul>
    )
  },

  _renderListItems: function() {
    var data = window.data;
    return data.map(function(event, i) {
      return (
        <Event key={i} event={event} />
      );
    });
  }
});

ReactDOM.render(
  <EventList />, document.getElementById('content')
);
