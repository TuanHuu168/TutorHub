const FAQItem = ({ question }) => {
    return (
        <div className="faq-item">
            <details>
                <summary>{question}</summary>
                <p>Câu trả lời đang cập nhật.</p>
            </details>
        </div>
    );
};

export default FAQItem;