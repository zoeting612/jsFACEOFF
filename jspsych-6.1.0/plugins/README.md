Notes about the image slider response plugin:
 Additions
    - Track movement parameter
        - If this is true, the location of the slider will be printed in the console 
    - Changing stim parameter
        - If true, the movement of the slider will end the trial to allow for a new trial with a different stimulus
            - function to end the trial is end_trial_changing_stim()
                - Notable data includes
                    - current slider value after it has been changed
                    - trial_done: false
            - Note: if this parameter is false, or if the participant submits an answer, the function to end the trial is end_trial()
                - Notable data includes 
                    - Trial_done: true
                    - *does not include slider value because you don’t need it if the trial has concluded*
