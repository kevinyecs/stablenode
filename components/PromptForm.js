// Build a form in next js that takes a prompt for input string
import styles from './PromptForm.module.css'

export default function PromptForm({ title }) {
    return (
        <form>
        <label>

            <input type="text" name="prompt" className={styles.input} placeholder="Pope smokin dat kush" />
        </label>
        <input type="submit" value="Submit" className={styles.aws_btn} />
        </form>
    )
    }

//Style the form

