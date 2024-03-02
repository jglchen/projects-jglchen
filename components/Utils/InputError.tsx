type InputErrorProps = {
    messages?: string[];
    className?: string;
}

const InputError = ({ messages = [], className = '' }: InputErrorProps) => (
    <>
        {messages.length > 0 && (
            <>
                {messages.map((message, index) => (
                    <p
                        className={`${className} text-base/[1.25rem] text-[#DE2626] dark:text-[#FEAAAA]`}
                        key={index}>
                        {message}
                    </p>
                ))}
            </>
        )}
    </>
)

export default InputError
