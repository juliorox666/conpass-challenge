import React, { Component } from "react";
import { connect } from "react-redux";
import addHotspot from "../actionCreators/addHotspot";
import removeHotspot from "../actionCreators/removeHotspot";
import "../styles/AppContent.scss";

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.handleCreateHotSpots = this.handleCreateHotSpots.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreateHotSpots(event) {
    console.log("handleCreateHotSpots", event);
    this.props.handleAddHotspot({
      posX: 10,
      posY: 11
    });
  }
  handleDelete(event, index) {
    event.preventDefault();
    console.log("handleDelete", index);
    this.props.handleRemoveHotspot(index);
  }
  render() {
    return (
      <div className="app-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <button
                type="button"
                className="btn-create-hotspot"
                onClick={this.handleCreateHotSpots}
              >
                Create Hotspot
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="table-responsive-lg">
                <div className="hotspot-title">List of hotspots</div>
                <div className="hotspot-list">
                  <div className="container">
                    {this.props.hotspots.map((hotspot, index) => (
                      <div className="row" key={`${hotspot.id}-${index}`}>
                        <div className="col-6 name">{`${
                          hotspot.text
                        } #${++index}`}</div>
                        <div className="col-6 btn-delete">
                          <a
                            href={`/#delete-${hotspot.id}`}
                            onClick={event => this.handleDelete(event, index)}
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ hotspots }) => ({
  hotspots
});

const mapDispatchToProps = dispatch => ({
  handleAddHotspot(pos) {
    dispatch(addHotspot(pos));
  },
  handleRemoveHotspot(index) {
    dispatch(removeHotspot(index));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContent);