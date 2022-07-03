import React from "react";
import ReactDOM from "react-dom/client";
import Form from "react-bootstrap/Form";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
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
                defaultChecked = {this.props.checked}
            />
        );
    }
}

function onCheck(event) {
    const checkedList = this.state.checkedList;
    checkedList[event.target.value] = !checkedList[event.target.value];
    const checkedAll = Object.values(checkedList).every(Boolean);

    this.setState({
        checkedList: checkedList,
        checkedAll: checkedAll
    });
}

function onCheckAll(event) {
    const checkedAll = !this.state.checkedAll;
    const checkedList = this.state.checkedList;
    for (const check_it in checkedList) {
        checkedList[check_it] = checkedAll;
    }

    this.setState({
        checkedList: checkedList,
        checkedAll: checkedAll
    });
}

// Articles.
class LikeButton extends React.Component {
    render() {
        return (
            <button type="button" class="btn btn-outline-dark">
            <i class="bi bi-skip-backward-fill"></i>
            </button>
        )
    }
}

class Item extends React.Component {
    render() {
        return (
            <article id={"article_" + this.props.item_id}>
            <h2>
            <span id={"title_" + this.props.item_id}>
            <a href={this.props.item_link}>{this.props.item_title}</a>
            </span>
            </h2>

            <p>
            Source:
            <a href={"/steins-feed-re/feed?feed=" + this.props.feed_id}>
            {this.props.feed_title}
            </a>.

            Published: {this.props.item_published}.

            Tags:
            <a href="/steins-feed-re/tag?tag=2">magazines</a>.
            </p>

            <div id={"summary_" + this.props.item_id}>
            <p>{this.props.item_summary}</p>
            </div>

            <p>
            <LikeButton />
            <LikeButton />
            </p>
            </article>
        )
    }
}

class ItemWall extends React.Component {
    render() {
        const item_cmpnts = [];
        item_cmpnts.push(
            <hr key="hr_0" />
        );

        for (const item_it of articles) {
            item_cmpnts.push(
                <Item
                    key = {item_it.id}
                    item_id = {item_it.id}
                    item_title = {item_it.title}
                    item_link = {item_it.link}
                    item_published = {item_it.published}
                    item_summary = {item_it.summary}
                    feed_id = {item_it.feed.id}
                    feed_title = {item_it.feed.title}
                />
            );
            item_cmpnts.push(
                <hr key={"hr_" + item_it.id} />
            );
        }

        const wall_cmpnt = (
            <main>
            {item_cmpnts}
            </main>
        );

        return wall_cmpnt;
    }
}

const articles = [
    {
        "id": 5462487,
        "title": "„Besonderer Leckerbissen“ - Klopps Kommentare zu Salahs Vertragsverlängerung hinterlassen bitteren Beigeschmack",
        "link": "https://www.focus.de/sport/fussball/premierleague/besonderer-leckerbissen-klopp-kommentiert-salahs-vertragsverlaengerung-sueffisant_id_108941341.html",
        "feed": {
            "id": 254,
            "title": "FOCUS"
        },
        "published": "2022-07-02 12:59:43 GMT",
        "tags": [
            {
                "id": 2,
                "name": "magazines"
            },
        ],
        "summary": "Nach dem Abgang von Sadio Mané ist die Freude über die Bekanntgabe der Vertragsverlängerung von Superstar Mohamed Salah in Liverpool groß - auch bei Trainer Jürgen Klopp, was dem britischen „Mirror“ sauer aufstößt."
    },
    {
        "id": 5462537,
        "title": "Erster Auftritt nach fünf Jahren: Adele kehrt auf die Bühne zurück",
        "link": "https://www.spiegel.de/kultur/musik/erster-auftritt-nach-fuenf-jahren-adele-kehrt-auf-die-buehne-zurueck-a-f7f3ec35-ad8f-41aa-b71d-92646d3d8977#ref=rss",
        "feed": {
            "id": 636,
            "title": "Spiegel"
        },
        "published": "2022-07-02 12:58:16 GMT",
        "tags": [
            {
                "id": 2,
                "name": "magazines"
            },
        ],
        "summary": "Im Londoner Hyde Park hat Adele den ersten Auftritt nach langer Pause hinter sich gebracht, Kritiker äußern sich begeistert. Am Samstag folgt ein weiteres Konzert, eine Tour ist aber nicht geplant."
    },
    {
        "id": 5462491,
        "title": "Großbritannien - Formel 1: Großer Preis von Silverstone im Livestream schauen",
        "link": "https://www.focus.de/kultur/kino_tv/grossbritannien-formel-1-im-free-tv-und-livestream-grosser-preis-von-silverstone-qualifying_id_108266652.html",
        "feed": {
            "id": 247,
            "title": "FOCUS Kultur"
        },
        "published": "2022-07-02 12:56:54 GMT",
        "tags": [
            {
                "id": 2,
                "name": "magazines"
            },
        ],
        "summary": "Diese Woche trifft sich der Formel 1-Zirkus in Großbritannien. Am 3. Juli gastiert die Formel 1 in Silverstone – und wer im TV live dabei sein will, hat beste Chancen: Der Große Preis von Großbritannien wird auch im Free-TV bei RTL übertragen. Heute findet das 3. Training und Qualifying statt."
    }
]

root.render(
    <ItemWall />
)

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

        this.onCheck = onCheck.bind(this);
        this.onCheckAll = onCheckAll.bind(this);
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
                onChange = {this.onCheckAll}
            />
        );

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
class LangsNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: {
                "English": true,
                "German": true
            },
            checkedAll: true
        };

        this.onCheck = onCheck.bind(this);
        this.onCheckAll = onCheckAll.bind(this);
    }

    render() {
        const checkedList = this.state.checkedList;
        const lang_cmpnts = [];

        lang_cmpnts.push(
            <NavCheckBox
                key = {null}
                value = "ALL"
                id = "sidenav-lang-"
                checked = {this.state.checkedAll}
                onChange = {this.onCheckAll}
            />
        );

        for (const lang_it in checkedList) {
            lang_cmpnts.push(
                <NavCheckBox
                    key = {lang_it}
                    name = "lang"
                    value = {lang_it}
                    id = {"sidenav-lang-" + lang_it}
                    checked = {checkedList[lang_it]}
                    onChange = {this.onCheck}
                />
            );
        }

        const fieldset_cmpnt = (
            <fieldset id="input_lang">
                <legend>Languages</legend>
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
                <NavRadioButton
                    key = {wall_it}
                    name = "wall"
                    value = {wall_it}
                    id = {"sidenav-wall-" + wall_it}
                    checked = {wall_it === "Classic"}
                />
            );
        }

        const fieldset_cmpnt = (
            <fieldset id="input_wall">
                <legend>Wall</legend>
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
