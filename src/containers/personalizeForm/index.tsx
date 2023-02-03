import React, { Fragment } from "react";
import UiFormCheckBoxGroup from "../../components/formFields/UiFormCheckBoxGroup";
import { personalizeScreenType } from "../../shared/types";
import { useForm } from "react-hook-form";
import UiFormRadioGroup from "../../components/formFields/UiFormRadioGroup";
import UiButton from "../../components/button/button";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { APP_ROUTES } from "../../routes/routes";

interface UiPersonalizeFormProps {
  screen: personalizeScreenType | undefined | null;
  loading?: boolean;
  qusIndex: string | number;
}

const UiPersonalizeForm = ({ screen, qusIndex, loading }: UiPersonalizeFormProps) => {
  const router = useRouter();
  const { control, getValues } = useForm();

  const handleCheck = (checkedId: any) => {
    const { item_ids: ids } = getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id: any) => id !== checkedId)
      : [...(ids ?? []), checkedId];
    return newIds;
  };

  return (
    <Fragment>
      <Fragment>
        {screen && (
          <>
            {screen.questions.map((item) => (
              <Fragment key={item.questionId}>
                <h3>{item.question.input}</h3>
                {!item.question.isMultipleChoice && (
                  <UiFormRadioGroup
                    variant="CHIP"
                    onChange={handleCheck}
                    control={control}
                    id="screen"
                    name="screen_1"
                    defaultValues={item.question.value}
                    options={item.question.optionsData}
                  />
                )}
                {item.question.isMultipleChoice && (
                  <UiFormCheckBoxGroup
                    variant="IMAGE"
                    onChange={handleCheck}
                    control={control}
                    id="screen"
                    name="screen_0"
                    defaultValues={item.question.value}
                    options={item.question.optionsData}
                  />
                )}
              </Fragment>
            ))}
          </>
        )}

        <Box pb={3} pt={3}>
          <UiButton
            id="ui_button"
            variant="contained"
            color="secondary"
            onClick={() => {
              router.push({
                pathname: APP_ROUTES.PERSONALIZATION,
                query: {
                  qusIndex: Number(qusIndex) + 1,
                },
              });
            }}
          >
            Next
          </UiButton>
        </Box>
      </Fragment>
    </Fragment>
  );
};

export default UiPersonalizeForm;
