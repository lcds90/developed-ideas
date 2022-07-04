import { reactive, watchEffect } from "vue";

export const useBinaryConversion = () => {

    const input = reactive({
        placeholder: "Digite apenas números, que seja 0 ou 1.",
        text: "",
        value: "",
        error: "Você deve digitar apenas números, que seja 0 ou 1.",
    });

    const checkNumber = (value: string) => /^\d+$/.test(value);

    const checkValue = (value: string) => !/[2-9]/g.test(value);
    watchEffect(() => {
        if (checkNumber(input.value) && checkValue(input.value)) {
            input.text = parseInt(input.value, 2).toString();
        } else {
            input.text = input.error;
        }
    });

    return { input }
}