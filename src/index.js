import React from "react";
import ReactDOM from "react-dom/client";
import Form from "react-bootstrap/Form";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<p>Hello Vera</p>)

const sidenav = ReactDOM.createRoot(document.getElementById("sidenav"));

class NavCheckBox extends React.Component {
    render() {
        return (
            <Form.Check
                type = "checkbox"
                name = {this.props.name}
                value = {this.props.value}
                id = {this.props.id}
                label = {this.props.value}
                checked = {this.props.checked}
                onChange = {this.props.onChange}
            />
        );
    }
}

class NavRadioButton extends React.Component {
    render() {
        return (
            <Form.Check
                type = "radio"
                name = {this.props.name}
                value = {this.props.value}
                id = {this.props.id}
                label = {this.props.value}
                checked = {this.props.checked}
            />
        );
    }
}

// Tags.
class TagsNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: {
                "activism": false,
                "business": false,
                "cambridge": false
            },
            checkedAll: false
        };

        this.onCheck = this.onCheck.bind(this);
    }

    onCheck(event) {
        const checkedList = this.state.checkedList;
        checkedList[event.target.value] = !checkedList[event.target.value];
        const checkedAll = Object.values(checkedList).every(Boolean);

        this.setState({
            checkedList: checkedList,
            checkedAll: checkedAll
        });
    }

    render() {
        const checkedList = this.state.checkedList;
        const tag_cmpnts = [];

        tag_cmpnts.push(
            <NavCheckBox
                key = {null}
                value = "ALL"
                id = "sidenav-tag-"
                checked = {this.state.checkedAll}
            />
        );
        console.log(tag_cmpnts)

        for (const tag_it in checkedList) {
            tag_cmpnts.push(
                <NavCheckBox
                    key = {tag_it}
                    name = "tag"
                    value = {tag_it}
                    id = {"sidenav-tag-" + tag_it}
                    checked = {checkedList[tag_it]}
                    onChange = {this.onCheck}
                />
            );
        }

        const fieldset_cmpnt = (
            <fieldset id="input_tag">
                <legend>Tags</legend>
                {tag_cmpnts}
            </fieldset>
        );

        return fieldset_cmpnt;
    }
}

// Languages.
const ls_langs = [
    "English",
    "German"
];

class LangsNav extends React.Component {
    render() {
        const lang_cmpnts = [];
        for (const lang_it of ls_langs) {
            lang_cmpnts.push(
                <NavCheckBox key={lang_it} name="lang" value={lang_it} id={"sidenav-lang-" + lang_it} />
            );
        }

        const fieldset_cmpnt = (
            <fieldset id="input_lang">
                <legend>Langs</legend>
                {lang_cmpnts}
            </fieldset>
        );

        return fieldset_cmpnt;
    }
}

// Wall.
const ls_wall = [
    "Classic",
    "Random",
    "Magic",
    "Surprise"
];

class WallNav extends React.Component {
    render() {
        const wall_cmpnts = [];
        for (const wall_it of ls_wall) {
            wall_cmpnts.push(
                <NavRadioButton key={wall_it} name="wall" value={wall_it} id={"sidenav-wall-" + wall_it} checked={wall_it === "Classic"} />
            );
        }

        const fieldset_cmpnt = (
            <fieldset id="input_wall">
                <legend>Walls</legend>
                {wall_cmpnts}
            </fieldset>
        );

        return fieldset_cmpnt;
    }
}

sidenav.render(
    <form>
        <TagsNav />
        <LangsNav />
        <WallNav />
    </form>
);
