import React, { useState, useEffect, useRef } from "react";

const SnakeGame = () => {
    const canvasWidth = 400;
    const canvasHeight = 400;
    const boxSize = 20;

    const [snake, setSnake] = useState([{ x: 200, y: 200 }]);
    const [food, setFood] = useState(spawnFood());
    const [direction, setDirection] = useState("RIGHT");
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const canvasRef = useRef(null);

    function spawnFood() {
        return {
            x: Math.floor(Math.random() * (canvasWidth / boxSize)) * boxSize,
            y: Math.floor(Math.random() * (canvasHeight / boxSize)) * boxSize,
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!gameOver) moveSnake();
        }, 100);
        return () => clearInterval(interval);
    }, [snake, direction, gameOver]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    if (direction !== "DOWN") setDirection("UP");
                    break;
                case "ArrowDown":
                    if (direction !== "UP") setDirection("DOWN");
                    break;
                case "ArrowLeft":
                    if (direction !== "RIGHT") setDirection("LEFT");
                    break;
                case "ArrowRight":
                    if (direction !== "LEFT") setDirection("RIGHT");
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [direction]);

    const moveSnake = () => {
        const head = { ...snake[0] };

        switch (direction) {
            case "UP":
                head.y -= boxSize;
                break;
            case "DOWN":
                head.y += boxSize;
                break;
            case "LEFT":
                head.x -= boxSize;
                break;
            case "RIGHT":
                head.x += boxSize;
                break;
            default:
                break;
        }

        const newSnake = [head, ...snake];

        if (head.x === food.x && head.y === food.y) {
            setScore(score + 1);
            setFood(spawnFood());
        } else {
            newSnake.pop();
        }

        if (checkCollision(newSnake)) {
            setGameOver(true);
        } else {
            setSnake(newSnake);
        }
    };

    const checkCollision = (newSnake) => {
        const head = newSnake[0];

        // Check wall collision
        if (head.x < 0 || head.x >= canvasWidth || head.y < 0 || head.y >= canvasHeight) {
            return true;
        }

        // Check self-collision
        for (let i = 1; i < newSnake.length; i++) {
            if (head.x === newSnake[i].x && head.y === newSnake[i].y) {
                return true;
            }
        }

        return false;
    };

    const restartGame = () => {
        setSnake([{ x: 200, y: 200 }]);
        setDirection("RIGHT");
        setScore(0);
        setFood(spawnFood());
        setGameOver(false);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Clear the canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Draw food
        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, boxSize, boxSize);

        // Draw snake
        ctx.fillStyle = "lime";
        snake.forEach((segment) => {
            ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
        });
    }, [snake, food]);

    return (
        <div className="flex flex-col items-center justify-center text-center text-white bg-gray-800 h-80% w-full sticky p-4">
            <div>
                <h1>Melde dich an...oder spiel Snake!</h1>
                <h2>Score: {score}</h2>
            </div>
            {gameOver && (
                <h2>
                    Game Over! <button onClick={restartGame}>Neustarten</button>
                </h2>
            )}
            <canvas
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight}
                className="mt-5 border-2 border-white bg-gray-900"
            />
        </div>
    );
};

export default SnakeGame;
