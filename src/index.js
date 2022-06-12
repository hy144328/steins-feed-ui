import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<p>Hello Vera</p>)

const sidenav = ReactDOM.createRoot(document.getElementById("sidenav"));

class NavCheckBox extends React.Component {
    render() {
        return (
            <div className="form-check">
                <input type="checkbox" className="form-check-input" name={this.props.name} value={this.props.value} id={this.props.id} />
                <label className="form-check-label" htmlFor={this.props.id}>
                    {this.props.value}
                </label>
            </div>
        );
    }
}

class NavRadioButton extends React.Component {
    render() {
        return (
            <div className="form-check">
                <input type="radio" className="form-check-input" name={this.props.name} value={this.props.value} id={this.props.id} checked />
                <label className="form-check-label" htmlFor={this.props.id}>
                    {this.props.value}
                </label>
            </div>
        );
    }
}

// Tags.
const ls_tags = [
    "activism",
    "business",
    "cambridge"
];

class TagsNav extends React.Component {
    render() {
        const tag_cmpnts = [];
        for (const tag_it of ls_tags) {
            tag_cmpnts.push(
                <NavCheckBox name="tag" value={tag_it} id={"sidenav-tag-" + tag_it} />
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
                <NavCheckBox name="lang" value={lang_it} id={"sidenav-lang-" + lang_it} />
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
                <NavRadioButton name="wall" value={wall_it} id={"sidenav-wall-" + wall_it} checked />
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
