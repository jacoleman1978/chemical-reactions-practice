import { SyntheticEvent } from "react";
import { Form, Button } from "react-bootstrap";
import NamingQuestionGroup from "./NamingQuestionGroup";
import { NamingPracticeProps } from "../../interfaces";

const NamingForm = ({type}: NamingPracticeProps) => {
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <NamingQuestionGroup type={type} />
            <Button variant="primary" type="submit">
                Check Answers
            </Button>
        </Form>
    )
}

export default NamingForm;