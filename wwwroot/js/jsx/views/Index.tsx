type AppProps = {
    message: string;
};

const Page = ({ message }: AppProps) => (
    <div class="text-center">
        <h1 class="display-4">Welcome</h1>
        <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
    </div>
);

ReactDOM.render(<Page />, document.getElementById('content'));
