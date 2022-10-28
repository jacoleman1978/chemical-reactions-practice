import NamingQuestionGroup from "./NamingQuestionGroup";
import { SyntheticEvent } from "react";
import { Form, Button } from "react-bootstrap";

const NamingForm = () => {
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <NamingQuestionGroup />
            <Button variant="primary" type="submit">
                Check Answers
            </Button>
        </Form>
    )
}

export default NamingForm;