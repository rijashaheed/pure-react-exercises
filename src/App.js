import React from "react";
import img from "../src/logo.svg";
import AddressLabel from "./PropTypesExercise1";
import Envelope from "./PropTypesExercise2";
import CreditCard from "./PropTypesExercise3";
import Poster from "./PropTypesExercise4";
import Email from "./PropTypesExercise5";
import ErrorBox from "./ChildrenExercise1";
import Dialog from "./ChildrenExercise3";
import FileList from "./GithubFileListExample_Exercise1";
import CardList from "./ListTrelloExercise4";
import NewsList from "./ListHackerNewsExercise5";
import { Page, House } from "./StateClassExercise1";
import House1 from "./StateClassExercise2";
import ChildrenArray from "./ChildrenExercise2";
import Reddit from "./APIRequestExercise1";
import Room from "./StateFunctionExercise1";
import RandomList from "./StateFunctionExercise2";
import AudioControls from "./StateFunctionExercise3";

//GitHub example
function App() {
  const testPerson = {
    name: "James Smith",
    address: {
      streetNo: 123,
      streetName: "Fake",
      city: "Boston",
      state: "MA",
      postalCode: "02118",
    },
  };

  const recipient = {
    name: "Lara Smith",
    address: {
      streetNo: 123,
      streetName: "Fake",
      city: "Boston",
      state: "MA",
      postalCode: "02118",
    },
  };

  const sender = {
    name: "Jonnas Smith",
    address: {
      streetNo: 456,
      streetName: "Fake",
      city: "Boston",
      state: "MA",
      postalCode: "02118",
    },
  };

  const sampleCreditCard = {
    bankName: "Big bank, Inc.",
    creditCardNo: {
      no1: 1234,
      no2: 5678,
      no3: 8765,
      no4: 4321,
    },
    expirationDate: {
      month: 11,
      year: 20,
    },
    cardHolder: "Steven John",
  };

  const sampleEmail = {
    sender: "React newsletter",
    subject: "React Newsletter-Issue 36",
    date: "Jul 15",
    message:
      "-July 15th 2016 Read this issue on the web https://reactnewsletterjs.com/issue/36?sid=3QGDYBX###Comme",
  };

  const testFiles = [
    {
      id: 1,
      name: "src",
      type: "folder",
      updated_at: "2020-07-11 21:24:00",
      latestCommit: {
        message: "Initial commit",
      },
    },
    {
      id: 2,
      name: "tests",
      type: "folder",
      updated_at: "2020-07-11 21:24:00",
      latestCommit: {
        message: "Initial commit",
      },
    },
    {
      id: 3,
      name: "README",
      type: "file",
      updated_at: "2020-07-11 21:24:00",
      latestCommit: {
        message: "Add a readme",
      },
    },
  ];

  const sampleCards = [
    {
      id: 1,
      name: "Subwoofer",
    },
    {
      id: 2,
      name: "Non-porous washable",
    },
    {
      id: 3,
      name: "Wings",
    },
    {
      id: 4,
      name: "Bevelez Bezel",
    },
    {
      id: 5,
      name: "Bezeled Bevel",
    },
    {
      id: 6,
      name: "SeedList",
    },
  ];

  const sampleNews = [
    {
      id: 1,
      heading: "Why I'm Suing the US Government",
      website: "bunniestudios.com",
      description: {
        points: 1346,
        user: "ivank",
        updated_at: "2020-07-11 21:24:00",
        comments: 53,
      },
    },

    {
      id: 2,
      heading: "Zenzizenic",
      website: "wikipedia.org",
      description: {
        points: 1200,
        user: "vichuco",
        updated_at: "2020-07-11 21:24:00",
        comments: 53,
      },
    },
  ];

  return (
    <div className="App">
      <AddressLabel person={testPerson} />
      <Envelope toPerson={recipient} fromPerson={sender} />
      <CreditCard cardInfo={sampleCreditCard}></CreditCard>
      <Poster
        image={img}
        title="React"
        text="The best thing after jQuery."
      ></Poster>
      <Email email={sampleEmail}></Email>
      <ErrorBox>The world is ending</ErrorBox>
      <ChildrenArray>
        <p>First element</p>
        <p>Second element</p>
        <p>Third element</p>
        <p>Fourth element</p>
        <p>Fifth element</p>
        <p>Sixth element</p>
        <p>Seventh element</p>
      </ChildrenArray>
      <Dialog>
        <h3>This is important</h3>
        <p>Here is some important text or error or something</p>
        <button className="dialogButton">Close</button>
      </Dialog>
      <FileList files={testFiles}></FileList>
      <CardList cards={sampleCards}></CardList>
      <NewsList news={sampleNews} />
      <Page />
      <House />
      <House1 />
      <Reddit subreddit="CSS" />
      <Room />
      <RandomList />
      <AudioControls />
    </div>
  );
}

export default App;
