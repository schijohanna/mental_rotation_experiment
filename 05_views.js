 // In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Hello and welcome to this exciting experiment! The task you will be given
  won’t take much of your time but your participation will help a young and ambitious
  researcher-to-be to make her way in the world of science. Thank you very much for participating!
  This is a sample introduction view.`,
  buttonText: 'Proceed to the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `The experiment you are going to take part in consists of two parts,
  one being a short practice and the other the main trial  in which the answers
  you give will be stored for the sake of later data analysis. Both trials are
  similar in their structure and the content will be more or less identical.
The task will test for your ability to validly judge whether or not a figure
shown on the screen resembles the one presented before just in another orientation,
or if it is a different figure instead. Your judgment should happen fast and
precisely since your reaction time is captured.
Below you see an example for both cases:
The same figure in two different orientations
Two different figures
You will submit your judgment by key presses on your keyboard. One key will be
assigned to the first and another to the second condition and the assignment
will remain the same throughout both trials. The keys you are going to use will
be shown in the practice trial for you to get used to them.
It is very important that you stay focused throughout the whole experiment and
optimally mute all surrounding distractions. If you reconsider and do not want
to submit your data after all you can do so by just closing the window in your
browser. That way non of the information that you inserted beforehand will be
stored anywhere.
In the end of the experiment after you finished the practice and the main trial
we will collect some information about your person like your age and your gender.
Those information are optional but providing them would help us drawing more
accurate conclusions. Your data will be anonymous throughout the entire process
of analyzing the results so that you do not have to worry that we connect it to
your person in any kind of way.
If you feel ready, please start the practice trial now by clicking on the
‚start‘ button on your screen.This is a sample instructions view.`,
  buttonText: 'Start'
});



const intermediate_wrapping = magpieViews.view_generator ("intermediate_wrapping", {
  trials: 1,
  name: 'intermediate_wrapping:',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `You now finished the practice phase and are well prepared for the main
  part of the experiment. In order to proceed, press the button below.`,
  buttonText: 'Proceed to the experiment'
});




// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.',



  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button to confirm your participation'
});


const practice = custom_views.keypress_rotation_practice({
    trials: 12,
    // trials: 2,
    name: 'practice',
    trial_type: 'practice',
    pause: 250,
    data: _.shuffle(practice_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});


const main = custom_views.keypress_rotation_main({
    trials: 48,
    // trials: 8,
    name: 'main',
    trial_type: 'main',
    pause: 250,
    data: _.shuffle(main_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});



/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

// Here, we initialize a normal forced_choice view
//const key_press_trials = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  //trials: trial_info.key_press.length,
  // name should be identical to the variable name
  //name: 'key_press_trials',
  //data: trial_info.key_press,
  //pause: number (250),
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
//});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
