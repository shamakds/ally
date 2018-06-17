import * as React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createGame } from "../../../../store/actions";
import Modal from "../../../components/modal";
import Form from "../../../components/form";
import FormGroup from "../../../components/form/group";
import Select from "../../../components/form/select";

class View extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                privacy: "private"
            }
        };

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(ev) {
        ev.preventDefault();
        await this.props.createGame(this.state.options);
    }

    onValueChange(key, value) {
        const { options = {} } = this.state;
        this.setState({ options: {...options, [key]: value} })
    }

    render() {
        const { locations, gameTypes, privacyTypes, visibilityTypes } = this.props;
        const { options } = this.state;
        const isPrivate = options.privacy === "private";

        return (<section>
            <Modal title="Lobby settings">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup title="Location">
                        <Select onChange={this.onValueChange} valueKey="location"  value={options.location} options={locations} />
                    </FormGroup>
                    <FormGroup title="Type">
                        <Select onChange={this.onValueChange} valueKey="type"  value={options.type} options={gameTypes} />
                    </FormGroup>
                    <FormGroup  title="Privacy">
                        <Select onChange={this.onValueChange} valueKey="privacy" value={options.privacy} options={privacyTypes} />
                    </FormGroup>
                    {
                        isPrivate ?
                            [
                                <FormGroup key="visibility" title="Visible to">
                                    <Select valueKey="visibility" onChange={this.onValueChange} value={options.visibility} options={visibilityTypes} />
                                </FormGroup>,
                                <FormGroup key="password" title="Password">
                                    <input placeholder="No password" onChange={(e) => {
                                        this.onValueChange("password", e.target.value)
                                    }} value={options.password} />
                                </FormGroup>
                            ] : null
                    }
                    <FormGroup>
                        <input type="submit" value="Start" />
                    </FormGroup>
                </Form>
            </Modal>
        </section>);
    }
}

function mapStateToProps(state, props) {
    const locations = [{ label: "Forest", value: "forest" }];
    const gameTypes = [{ label: "Hunt", value: "hunt" }];
    const privacyTypes = [{ label: "Public", value: "public" }, { label: "Private", value: "private" }];
    const visibilityTypes = [{ label: "Friends", value: "friends" }];

    return { locations, gameTypes, privacyTypes, visibilityTypes };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createGame
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View))