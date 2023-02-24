let queue = [];

let songs = [
    {title: 'All of This',
     album: 'Blink 182',
     artist: 'Blink 182',
     genre: 'pop punk',
     length: 281
    },
    {title: '4u',
     album: 'Deadroses',
     artist: 'Blackbear',
     genre: 'pop',
     length: 161
    },
    {title: 'The Spectre',
     album: 'The Spectre',
     artist: 'Alan Walker',
     genre: 'edm',
     length: 207
    },
    {title: 'Only Love',
     album: 'Every Kingdom',
     artist: 'Ben Howard',
     genre: 'folk',
     length: 233
    },
    {title: 'Slow Dancing in a Burning Room',
     album: 'Continuum',
     artist: 'John Mayer',
     genre: 'rock/blues',
     length: 242
    },
    {title: 'Can I Kick It?',
     album: "People's Instinctive Travels and the Paths of Rythm",
     artist: 'A Tribe Called Quest',
     genre: 'hip hop',
     length: 265
    }
];

////////////////////////////////////

//puts picked song into the queue
const enqueue = userIn => {
    queue.unshift(songs.filter((e) => e.title.toLowerCase() === userIn.toLowerCase()));
};

enqueue('all of this');
console.log(queue);

const dequeue = userOut => {
    queue.pop(userOut);
};
