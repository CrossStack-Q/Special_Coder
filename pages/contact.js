import React, { useState } from "react";
import styles from "../styles/contact.module.css";
import { Input, useInput, Grid, Textarea, Button ,Card,Text } from "@nextui-org/react";
import Head from "next/head";

const Contact = () => {
  const { value, reset, bindings } = useInput("");
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  const MockItem = ({ text }) => {
    return (
      <Card color="primary" css={{ h: "$20" }}>
        <Text h6 size={15} color="white" css={{ m: 0 }}>
          {text}
        </Text>
      </Card>
    );
  };

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, desc);
    const data = { name, email, desc };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for Contact but I am busy");
        setdesc("");
        setname("");
        setemail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };

  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="Blogs from Anurag Sharma every week"
        />
        <meta
          name="keyword"
          content="Currently working on logistics model dashboard"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        
        <link rel="icon" type="image/png" href="./assets/blog.png" />
        {/* <script src='./sc.js' ></script> */}
      </Head>
      <div className={styles.Container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.locali}>
            <div className={styles.locali1}>
              <Grid>
                <Input
                  htmlFor="name"
                  id="name"
                  name="name"
                  width={300}
                  clearable
                  label="Name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </Grid>
            </div>
            <div className={styles.locali2}>
              <Grid>
                <Input
                  width={300}
                  {...bindings}
                  clearable
                  shadow={false}
                  onClearClick={reset}
                  status={helper.color}
                  color={helper.color}
                  helperColor={helper.color}
                  helperText={helper.text}
                  type="email"
                  label="Email"
                  placeholder=""
                  id="email"
                  name="email"
                  value={email}
                  htmlFor="email"
                  onChange={handleChange}
                />
              </Grid>
            </div>
          </div>
          <div className={styles.contactmessage}>
            <Grid>
              <Textarea
                className={styles.locali11}
                placeholder="Any Problem, Write down here, Anurag will help you."
                minRows={7}
                maxRows={40}
                id="desc"
                name="desc"
                value={desc}
                htmlFor="desc"
                onChange={handleChange}
              />
            </Grid>
          </div>
          <Button
            shadow
            color="primary"
            auto
            className={styles.submitbutton}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
