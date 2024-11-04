import React, { Component } from 'react';
import AnswerdCard from '../component/answerCard';
import { Box, Grid, Typography, Button } from '@mui/material';
import Header from '../sections/header';
import { withNavigate } from '../component/navigation/navigator';
import questions from '../data/questions';

class IntroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: questions,
      selectedCard: null,
      previousChoices: [],
    };
  }

  handleCardSelect = (index) => {
    const { currentQuestion, previousChoices } = this.state;
    const selectedSubQuestion = currentQuestion.subQuestions[index];

    if (selectedSubQuestion && selectedSubQuestion.subQuestions.length > 0) {
      this.setState({
        currentQuestion: selectedSubQuestion,
        selectedCard: index,
        previousChoices: [...previousChoices, selectedSubQuestion],
      });
    } else {
      console.log("User has completed the path:", [...previousChoices, selectedSubQuestion]);
      this.handleFinishClick(selectedSubQuestion);
    }
  };

  handleBackward = () => {
    const { previousChoices } = this.state;

    if (previousChoices.length > 0) {
      const newChoices = [...previousChoices];
      const lastQuestion = newChoices.pop();
      this.setState({
        currentQuestion: lastQuestion || questions,
        previousChoices: newChoices,
        selectedCard: null,
      });
    }
  };

  handleFinishClick = (currentQuestion) => {
    const pathTitles = currentQuestion.link;
    console.log(pathTitles);
    if (pathTitles != null && pathTitles.length > 0) {
      this.props.navigate(pathTitles);
    } else {
      this.setState({
        currentQuestion: questions,
        previousChoices: [],
        selectedCard: null,
      });
    }
  };

  render() {
    const { currentQuestion, selectedCard } = this.state;

    if (!currentQuestion) return null;

    return (
      <div>
        <Header />

        <Box textAlign="center">
          <Typography fontWeight="bold" variant="h4" mt={5}>
            {currentQuestion.question}
          </Typography>
          <Typography color="text.secondary">
            {currentQuestion.slogan}
          </Typography>

          <Box my={5} display="flex" justifyContent="center" width="100%">
            <Grid
              container
              spacing={2}
              justifyContent="center" // Center the Grid items
              style={{ width: '70%' }} // Set a width for the Grid container
            >
              {currentQuestion.subQuestions.map((q, index) => (
                <Grid item key={index}> {/* Adjusted to control item size */}
                  <AnswerdCard
                    isSelected={selectedCard === index}
                    onClick={() => this.handleCardSelect(index)}
                    title={q.title}
                    subTitle={q.subTitle}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }} width="70%" mx="auto" my={2}>
          {this.state.previousChoices.length > 0 && (
            <Button variant="text" color="primary" onClick={this.handleBackward}>
              Back
            </Button>
          )}
          {currentQuestion.subQuestions.length === 0 ? (
            <Button variant="text" color="primary" onClick={() => this.handleFinishClick()}>
              Finish
            </Button>
          ) : null}
        </Box>
      </div>
    );
  }
}

// Export the component wrapped with the navigation HOC
export default withNavigate(IntroPage);
