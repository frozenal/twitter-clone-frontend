import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  width: number | string;
  label: string;
  name: string;
  labelId: string;
  type: string;
  ref: any;
  errors?: string;
}

const AccountFormField = React.forwardRef((props: Props, ref: any) => {
  const [fieldSelected, setFieldSelected] = useState(false);

  return (
    <Box>
      <Box
        width={props.width}
        height={16}
        border="1px"
        borderColor={`${!fieldSelected ? "gray.600" : "blue.400"}`}
        rounded="md"
        textAlign="left"
        px={2}
        pt={1}
        className="border-opacity-50"
      >
        <FormControl isInvalid={props.errors ? true : false}>
          <FormLabel
            textColor={!fieldSelected ? "gray.500" : "blue.400"}
            opacity={70}
            mb={0}
            fontSize="sm"
            textAlign="left"
            width="full"
            htmlFor={props.labelId}
          >
            {props.label}
          </FormLabel>
          <Input
            size="sm"
            fontSize={20}
            px={0}
            border="none"
            my={0}
            bg="transparent"
            textColor="white"
            _focus={{ outline: "none" }}
            _invalid={{ outline: "none" }}
            name={props.name}
            id={props.labelId}
            type={props.type}
            onFocus={() => setFieldSelected(true)}
            onBlur={() => setFieldSelected(false)}
            ref={ref}
          />
          <FormErrorMessage>{props.errors}</FormErrorMessage>
        </FormControl>
      </Box>
    </Box>
  );
});

export default AccountFormField;
